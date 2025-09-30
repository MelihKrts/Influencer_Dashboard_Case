import { MdOutlineErrorOutline } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";

export default function Toast({ show }: { show: boolean }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed right-4 top-4 bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-2xl overflow-hidden z-50 max-w-sm">
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-400/20 backdrop-blur-sm"></div>

                        <div className="relative p-4">
                            <div className="flex items-start gap-3">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="flex-shrink-0"
                                >
                                    <div className="bg-white/20 rounded-full p-2">
                                        <MdOutlineErrorOutline className="text-white text-2xl" />
                                    </div>
                                </motion.div>

                                <div className="flex-1 pt-0.5">
                                    <h3 className="text-white font-semibold text-lg mb-1">
                                        Hata
                                    </h3>
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        Yanlış bilgi girişi yaptınız. Lütfen tekrar deneyin.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ scaleX: 1 }}
                            animate={{ scaleX: 0 }}
                            transition={{ duration: 3, ease: "linear" }}
                            className="h-1 bg-white/30 origin-left"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}