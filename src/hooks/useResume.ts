import { useCallback } from "react";

const RESUME_PATH = "/resume/Mulajim-Ali-Resume.pdf";

const useResume = () => {
    const downloadResume = useCallback(() => {
        window.open(RESUME_PATH, "_blank", "noopener,noreferrer");
    }, []);

    return {
        downloadResume,
        resumePath: RESUME_PATH,
    };
};

export default useResume;
