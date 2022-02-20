import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusHook from "./ProfileStatusHook";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatusHook status="it-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra.com");
  });
})
