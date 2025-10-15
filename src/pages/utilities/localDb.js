const getStoredApp = () => {
    const storedAppStr = localStorage.getItem("installedApp");
    if (storedAppStr){
        const storedAppData = JSON.parse(storedAppStr);
        return storedAppData
    }
    else {
        return [];
    }
};

export const addToLocalDb = (id) => {
    const storedAppData = getStoredApp()
    
    if (storedAppData.includes(id)) {
        alert("App already installed")
    }
    else{
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("installedApp",data)
    }
}