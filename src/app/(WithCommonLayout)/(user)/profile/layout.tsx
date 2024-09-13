import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <h2>User Layout</h2>
            {children}
        </div>
    );
}