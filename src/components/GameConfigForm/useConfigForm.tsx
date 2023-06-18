import { useCallback, useRef } from "react";
import { GameConfigForm } from ".";
import { GameConfigFormProps } from "./types";

function useConfigForm(props?: GameConfigFormProps) {
    const formRef = useRef<HTMLDialogElement>(null)

    const Form = useCallback(() => {
        return <GameConfigForm ref={formRef} {...props}/>;
    }, [formRef, props])

    const show = useCallback(() => {
        formRef.current && !formRef.current.open && formRef.current.showModal()
    }, [formRef])

    return {
        show,
        Form
    };
}

export default useConfigForm