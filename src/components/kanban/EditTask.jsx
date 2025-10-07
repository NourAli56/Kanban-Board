import { motion } from "framer-motion";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

export default function EditTask({ title, setTitle, desc, setDesc, handleSave, setEditMode }) {
    return (
        <motion.div
            key="edit-mode"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
        >
            <Input
                placeholder="عنوان المهمة"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="dark:bg-gray-600 dark:text-white"
            />
            <Textarea
                placeholder="الوصف"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="dark:bg-gray-600 dark:text-white"
            />
            <div className="flex gap-1">
                <motion.button
                    onClick={handleSave}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                >
                    حفظ
                </motion.button>
                <motion.button
                    onClick={() => setEditMode(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-[#8198AF]  text-[#8198AF] px-3 py-1 rounded text-sm"
                >
                    إلغاء
                </motion.button>
            </div>
        </motion.div>
    )
}
