import { motion } from "framer-motion";

const MotionBorderCircle = () => {
  return (
    <div className="relative w-[384px] h-[384px]">
      {/* Rotating Gradient Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute rounded-full bg-gradient-to-tr from-lime-300 to-cyan-400"
      >
        <div className="w-full h-full rounded-full" />
      </motion.div>

      {/* Static Inner Content (Profile Image) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img
          src="my-photo.JPEG"
          alt="Profile"
          className=" w-[380px] h-[380px] rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default MotionBorderCircle;
