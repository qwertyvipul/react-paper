import React from "react";
import { Meta } from "@storybook/react/types-7-0";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const PrimaryButton = () => <Button label="Hello world" primary />;