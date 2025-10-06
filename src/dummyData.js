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