import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const sequences = [
    "[ OK ] INITIALIZING_CORE_KERNELS",
    "[ OK ] LOADING_SYSTEM_ASSETS",
    "[ OK ] ESTABLISHING_ENCRYPTED_CONNECTION",
    "[ !! ] ANALYZING_USER_ENVIRONMENT",
    "[ OK ] SYNCING_MATRIX_DATA",
    "[ OK ] BOOT_SEQUENCE_COMPLETE",
    "DECRYPTING_PORTFOLIO.BIN"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < sequences.length) {
        const nextLog = sequences[index];
        if (nextLog) {
          setLogs(prev => [...prev, nextLog]);
        }
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onFinish, 600);
        }, 600);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-custom-background flex flex-col items-center justify-center p-6"
        >
          {/* Central Logo / Pulse */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mb-12"
          >
             <div className="w-24 h-24 border-2 border-custom-neonGreen rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border border-custom-cyberBlue rounded-full flex items-center justify-center animate-spin-slow">
                   <div className="w-8 h-8 bg-custom-neonGreen/20 rounded-full blur-md"></div>
                </div>
             </div>
          </motion.div>

          {/* Terminal Logs */}
          <div className="w-full max-w-md bg-custom-darkGray/20 p-8 rounded-2xl border border-white/5 backdrop-blur-md">
            <div className="space-y-3 font-mono text-[10px] md:text-sm tracking-widest h-[150px] overflow-hidden flex flex-col justify-end">
              {logs.map((log, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${log?.includes('!!') ? 'text-custom-cyberBlue' : 'text-custom-neonGreen'} opacity-80`}
                >
                  {log || ''}
                </motion.p>
              ))}
              {/* Blinking cursor */}
              <div className="flex items-center gap-1.5 pt-2">
                <span className="text-custom-neonGreen-soft">{">"}</span>
                <motion.div
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-custom-neonGreen"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-[8px] uppercase tracking-[0.4em] opacity-30 animate-pulse font-mono">
             Lucas_Walica_OS v4.0.0-PROD
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
