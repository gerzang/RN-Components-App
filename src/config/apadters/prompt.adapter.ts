import prompt from 'react-native-prompt-android';

interface Options {
    title: string;
    subTitle?: string;
    buttons: PromptButton[];
    promptType?: 'plain-text' | 'secure-text';
    placeholder?: string;
    defaultValue?: string;
}

interface PromptButton {
    text: string;
    onPress: () => void;
    style?: 'cancel' | 'default' | 'destructive';
}


export const showPrompt = ({
    title,
    subTitle,
    buttons,
    promptType = 'plain-text',
    placeholder,
    defaultValue: defaulValue,
}: Options) => {
    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promptType,
            cancelable: false,
            placeholder: placeholder,
            defaultValue: defaulValue
        }

    );
}