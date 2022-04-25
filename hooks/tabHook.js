import { useState } from "react";

export const useTabState = () => {
    const [activeTab, setActiveTab] = useState("ro");
    const [unactiveTab, setUnactiveTab] = useState("ru");

    return {
        activeTab, setActiveTab, unactiveTab, setUnactiveTab
    }
}