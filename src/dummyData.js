import { EmpIcon, EmpOrderIcon, HomeIcon, IncentivesIcon, OrderIcon, PerformanceIcon, ReportIcon, WalletIcon } from "./components/iconsAsSvg";

export const sections = [
    {
        title: "الاكثر استخدام",
        items: [
            { icon: HomeIcon, label: "الرئيسية", hasArrow: false },
            { icon: EmpIcon, label: "قائمة الموظفين" },
            { icon: WalletIcon, label: "النظام المالي" },
            { icon: ReportIcon, label: "قسم التقارير" },
            { icon: OrderIcon, label: "الطلبات" },
        ],
    },
    {
        title: null,
        items: [
            { icon: OrderIcon, label: "الطلبات" },
            { icon: PerformanceIcon, label: "قياس الأداء" },
            { icon: EmpOrderIcon, label: "طلبات التوظيف" },
            { icon: IncentivesIcon, label: "الحوافز" },
        ],
    },
];

export const STORAGE_KEY = "kanbanData";
// البيانات الافتراضية
export const defaultData = {
  "column-1": { 
    id: "column-1", 
    title: "قائمة المهام", 
    taskIds: ["task-1", "task-2"] 
  },
  "column-2": { 
    id: "column-2", 
    title: "قيد العمل", 
    taskIds: [] 
  },
  "column-3": { 
    id: "column-3", 
    title: "قيد المراجعة", 
    taskIds: [] 
  },
};

export const defaultTasks = {
  "task-1": { 
    id: "task-1", 
    title: "المهمة الأولى", 
    description: "وصف المهمة الأولى" 
  },
  "task-2": { 
    id: "task-2", 
    title: "المهمة الثانية", 
    description: "وصف المهمة الثانية" 
  },
};