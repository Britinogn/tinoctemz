import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-(--background) px-6">
            <div className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-7xl font-bold text-(--primary)"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="mt-4 text-3xl font-semibold text-(--text-dark)"
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mx-auto mt-4 max-w-md text-(--text-secondary)"
                >
                    The page you are looking for does not exist or may have been moved.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-8"
                >
                    <Link
                        to="/"
                        className="rounded-xl bg-(--primary) px-6 py-3 text-white transition hover:opacity-90"
                    >
                        Return Home
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;