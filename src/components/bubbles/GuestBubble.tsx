import { Show, onMount } from "solid-js";
import { Avatar } from "../avatars/Avatar";
import { Marked } from "@ts-stack/markdown";
import Config from "@/config";

type Props = {
  message: string;
  showAvatar?: boolean;
  avatarSrc?: string;
  backgroundColor?: string;
  textColor?: string;
};

Marked.setOptions({ isNoP: true });

export const GuestBubble = (props: Props) => {
  let userMessageEl: HTMLDivElement | undefined;

  onMount(() => {
    if (userMessageEl) {
      userMessageEl.innerHTML = Marked.parse(props.message);
    }
  });

  return (
    <div
      class="flex justify-end mb-2 items-end guest-container"
      style={{ "margin-left": "50px" }}
    >
      <span
        ref={userMessageEl}
        class="px-4 py-2 mr-2 whitespace-pre-wrap max-w-full chatbot-guest-bubble"
        data-testid="guest-bubble"
        style={{
          "background-color":
            props.backgroundColor ??
            Config.theme.messages.user.defaultBackgroundColor,
          color: props.textColor ?? Config.theme.messages.user.defaultTextColor,
          "border-radius": "6px",
        }}
      />
      <Show when={props.showAvatar}>
        <Avatar src={props.avatarSrc} />
      </Show>
    </div>
  );
};
