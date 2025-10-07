import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { defaultData, defaultTasks, STORAGE_KEY } from "../dummyData";

const KanbanContext = createContext();

export const useKanban = () => useContext(KanbanContext);
export const KanbanProvider = ({ children }) => {
  const [columns, setColumns] = useState({});
  const [tasks, setTasks] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState({});

  // تحميل البيانات من localStorage عند التحميل الأول
  useEffect(() => {
    const loadData = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsedData = JSON.parse(stored);
          setColumns(parsedData.columns || defaultData);
          setTasks(parsedData.tasks || defaultTasks);
        } else {
          setColumns(defaultData);
          setTasks(defaultTasks);
        }
      } catch (error) {
        console.error("Error loading data from localStorage:", error);
        setColumns(defaultData);
        setTasks(defaultTasks);
      } finally {
        setIsLoaded(true);
      }
    };

    loadData();
  }, []);

  // حفظ البيانات في localStorage عند أي تغيير
  useEffect(() => {
    if (isLoaded) {
      try {
        const dataToStore = { columns, tasks };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
      } catch (error) {
        console.error("Error saving data to localStorage:", error);
      }
    }
  }, [columns, tasks, isLoaded]);

  // تطبيق البحث والتصفية
  useEffect(() => {
    const filtered = Object.values(tasks).filter(task => {
      // البحث في النص
      const matchesSearch = searchTerm === "" || 
        task.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchTerm.toLowerCase());

      // التصفية حسب الحالة
      const matchesStatus = filterStatus === "all" || 
        (() => {
          const column = Object.values(columns).find(col => 
            col.taskIds.includes(task.id)
          );
          return column?.id === filterStatus;
        })();

      return matchesSearch && matchesStatus;
    });

    // تحويل المصفوفة إلى كائن
    const filteredTasksObj = {};
    filtered.forEach(task => {
      filteredTasksObj[task.id] = task;
    });
    
    setFilteredTasks(filteredTasksObj);
  }, [tasks, searchTerm, filterStatus, columns]);

  // دالة تصدير المهام إلى CSV
  const exportToCSV = useCallback(() => {
    try {
      // رأس ملف CSV
      const headers = ["العنوان", "الوصف", "الحالة", "تاريخ الإنشاء", "تاريخ التحديث"];
      
      // تحويل البيانات إلى صفوف CSV
      const rows = Object.values(tasks).map(task => {
        // العثور على العمود الذي يحتوي على المهمة
        const column = Object.values(columns).find(col => 
          col.taskIds.includes(task.id)
        );
        
        const status = column ? column.title : "غير معروف";
        const createdAt = task.createdAt ? new Date(task.createdAt).toLocaleString('ar-EG') : "غير محدد";
        const updatedAt = task.updatedAt ? new Date(task.updatedAt).toLocaleString('ar-EG') : "غير محدد";
        
        return [
          `"${(task.title || '').replace(/"/g, '""')}"`,
          `"${(task.description || '').replace(/"/g, '""')}"`,
          `"${status}"`,
          `"${createdAt}"`,
          `"${updatedAt}"`
        ].join(",");
      });

      // دمج الرأس والصفوف
      const csvContent = [headers.join(","), ...rows].join("\n");
      
      // إنشاء ملف وتنزيله
      const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `مهام_كانبان_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error("Error exporting to CSV:", error);
      return false;
    }
  }, [tasks, columns]);

  // دالة تصدير إحصاءات المشروع
  const exportProjectStats = useCallback(() => {
    try {
      const statsHeaders = ["الحالة", "عدد المهام", "النسبة"];
      const totalTasks = Object.keys(tasks).length;
      
      const statsRows = Object.values(columns).map(column => {
        const taskCount = column.taskIds.length;
        const percentage = totalTasks > 0 ? ((taskCount / totalTasks) * 100).toFixed(1) : 0;
        
        return [
          `"${column.title}"`,
          taskCount,
          `${percentage}%`
        ].join(",");
      });

      // إضافة صف الإجمالي
      const totalRow = [
        '"الإجمالي"',
        totalTasks,
        '100%'
      ].join(",");

      const statsContent = [statsHeaders.join(","), ...statsRows, totalRow].join("\n");
      
      const blob = new Blob(["\uFEFF" + statsContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `إحصاءات_المشروع_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error("Error exporting project stats:", error);
      return false;
    }
  }, [columns, tasks]);

  // دوال البحث والتصفية
  const setSearch = (term) => {
    setSearchTerm(term);
  };

  const setStatusFilter = (status) => {
    setFilterStatus(status);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilterStatus("all");
  };

  const getTasksForColumn = (column) => {
    const columnTasks = column.taskIds.map(taskId => tasks[taskId]).filter(task => task);
    
    // تطبيق الفلتر إذا كان نشطاً
    if (searchTerm || filterStatus !== "all") {
      return columnTasks.filter(task => filteredTasks[task.id]);
    }
    
    return columnTasks;
  };

  const getFilteredTasksCount = () => {
    return Object.keys(filteredTasks).length;
  };

  const getTotalTasksCount = () => {
    return Object.keys(tasks).length;
  };

  const isFilterActive = () => {
    return searchTerm !== "" || filterStatus !== "all";
  };

  const addTask = (columnId, title, description) => {
    const taskId = uuid();
    const newTask = { 
      id: taskId, 
      title, 
      description,
      createdAt: new Date().toISOString()
    };
    
    setTasks(prev => ({ ...prev, [taskId]: newTask }));
    setColumns(prev => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        taskIds: [...prev[columnId].taskIds, taskId],
      },
    }));
  };

  const deleteTask = (columnId, taskId) => {
    setColumns(prev => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        taskIds: prev[columnId].taskIds.filter(id => id !== taskId),
      },
    }));
    
    setTasks(prev => {
      const newTasks = { ...prev };
      delete newTasks[taskId];
      return newTasks;
    });
  };

 const editTask = (columnId, taskId, updated) => {
  setTasks(prev => ({
    ...prev,
    [taskId]: { 
      ...prev[taskId], 
      ...updated, 
      updatedAt: new Date().toISOString() 
    },
  }));
};

  const addColumn = (title) => {
    const columnId = uuid();
    setColumns(prev => ({
      ...prev,
      [columnId]: { 
        id: columnId, 
        title, 
        taskIds: [],
        createdAt: new Date().toISOString()
      },
    }));
  };

  const deleteColumn = (columnId) => {
    setColumns(prev => {
      const newColumns = { ...prev };
      
      // حذف جميع المهام المرتبطة بهذا العمود
      setTasks(prevTasks => {
        const taskIdsToDelete = prev[columnId].taskIds;
        const newTasks = { ...prevTasks };
        taskIdsToDelete.forEach(taskId => delete newTasks[taskId]);
        return newTasks;
      });
      
      delete newColumns[columnId];
      return newColumns;
    });
  };

  const editColumn = (columnId, title) => {
    setColumns(prev => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        title,
        updatedAt: new Date().toISOString()
      },
    }));
  };

  const moveTask = (sourceColId, destColId, taskId, destIndex) => {
    setColumns(prev => {
      // إذا كان نفس العمود - إعادة ترتيب داخل العمود
      if (sourceColId === destColId) {
        const columnTasks = Array.from(prev[sourceColId].taskIds);
        const sourceIndex = columnTasks.indexOf(taskId);
        
        // إزالة العنصر من موقعه الأصلي وإدراجه في الموضع الجديد
        if (sourceIndex !== -1) {
          columnTasks.splice(sourceIndex, 1);
          columnTasks.splice(destIndex, 0, taskId);
          
          return {
            ...prev,
            [sourceColId]: { ...prev[sourceColId], taskIds: columnTasks },
          };
        }
      } else {
        // نقل بين أعمدة مختلفة
        const sourceTasks = prev[sourceColId].taskIds.filter(id => id !== taskId);
        const destTasks = Array.from(prev[destColId].taskIds);
        destTasks.splice(destIndex, 0, taskId);

        return {
          ...prev,
          [sourceColId]: { ...prev[sourceColId], taskIds: sourceTasks },
          [destColId]: { ...prev[destColId], taskIds: destTasks },
        };
      }
      
      return prev;
    });
  };

  const resetData = () => {
    setColumns(defaultData);
    setTasks(defaultTasks);
    clearFilters();
  };

  return (
    <KanbanContext.Provider
      value={{
        columns,
        tasks,
        filteredTasks,
        searchTerm,
        filterStatus,
        addTask,
        deleteTask,
        editTask,
        addColumn,
        deleteColumn,
        editColumn,
        moveTask,
        getTasksForColumn,
        resetData,
        exportToCSV,
        exportProjectStats,
        setSearch,
        setStatusFilter,
        clearFilters,
        getFilteredTasksCount,
        getTotalTasksCount,
        isFilterActive,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};