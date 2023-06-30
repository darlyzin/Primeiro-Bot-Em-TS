import { ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
  name: "ping",
  description: "reply the ping of bot.",
  type: ApplicationCommandType.ChatInput,

  run({ interaction }) {
    interaction.reply({
      content: `Pong!`,
    });
  },
});
