declare const chatbot: {
    initFull: (props: {
        chatflowid: string;
        includeQuestions: boolean;
        loadID?: string | undefined;
        userID?: string | undefined;
        defaultOpenDesktop?: boolean | undefined;
        defaultOpenMobile?: boolean | undefined;
        delayOpenFlag?: boolean | undefined;
        delayOpenSeconds?: number | undefined;
        stayClosedFlag?: boolean | undefined;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
        theme?: Record<string, unknown> | undefined;
        questions?: string[] | undefined;
        maxPopups?: number | undefined;
        popoutMessageConfig?: import("./features/bubble/types").PopoutMessageConfig | undefined;
        mobileQuestionFontSize?: string | undefined;
        desktopQuestionFontSize?: string | undefined;
        badgeText?: string | undefined;
    } & {
        id?: string | undefined;
    }) => void;
    init: (props: {
        chatflowid: string;
        includeQuestions: boolean;
        loadID?: string | undefined;
        userID?: string | undefined;
        defaultOpenDesktop?: boolean | undefined;
        defaultOpenMobile?: boolean | undefined;
        delayOpenFlag?: boolean | undefined;
        delayOpenSeconds?: number | undefined;
        stayClosedFlag?: boolean | undefined;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
        theme?: Record<string, unknown> | undefined;
        questions?: string[] | undefined;
        maxPopups?: number | undefined;
        popoutMessageConfig?: import("./features/bubble/types").PopoutMessageConfig | undefined;
        mobileQuestionFontSize?: string | undefined;
        desktopQuestionFontSize?: string | undefined;
        badgeText?: string | undefined;
    }) => Promise<void>;
};
export default chatbot;
//# sourceMappingURL=web.d.ts.map