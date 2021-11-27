import React, { useState } from "react";

import { MenuToggle } from './menuToggle';
import { MobileNavLinks } from "./mobileNavLinks";

export function MobileMenu (props) {
    const [isOpen, setOpen] = useState(false);

    return (
        
        <div>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && <MobileNavLinks />}
        </div>
    );
}