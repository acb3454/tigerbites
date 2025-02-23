import './inside-fridge.css';
import React from 'react';

export default function InsideFridge({ children }: { children: React.ReactNode }) {
    return (
        <div className="inside-base">
            {children}
            <div className="depth"></div>
        </div>
    );
}