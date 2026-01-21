import { useContext } from "react"
import { SidebarContext } from "../SidebarContext"

export const useSidebar = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("use Sidebar must be use within SidebarProvide");
    }
    return context;
}