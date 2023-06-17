import { useRef } from "react";
import { GameConfigForm } from ".";
import { GameConfigFormProps } from "./types";

function useConfigForm(props?: GameConfigFormProps) {
    const formRef = useRef<HTMLDialogElement>(null)

    const Form = () => {
        return <GameConfigForm ref={formRef} {...props}/>;
    }

    const show = () => {
        formRef.current && !formRef.current.open && formRef.current.showModal()
    }

    return {
        show,
        Form
    };
}

export default useConfigForm