"use client"

import { EyeIcon } from "lucide-react"
import NavIconButton from "../NavIconButton";

const PreviewButton = () => {
     return (
          <NavIconButton
               onClick={() => null}>
               <EyeIcon className="text-text h-5 w-5" />
          </NavIconButton>
     );
}

export default PreviewButton;