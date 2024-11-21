import { setOnPath } from "../src/index";
import { expect, describe, it } from "vitest";

describe("setOnPath", () => {
  it("sets a nested property on an object", () => {
    const obj: Record<string, unknown> = {};
    setOnPath(obj, "nested.key", "value");
    expect(obj).toEqual({ nested: { key: "value" } });
  });

  it("handles array paths correctly", () => {
    const obj: Record<string, unknown> = {};
    setOnPath(obj, "nested[0].key", "value");
    expect(obj).toEqual({ nested: [{ key: "value" }] });
  });

  it("overrides existing keys correctly", () => {
    const obj = { nested: { existing: "oldValue" } };
    setOnPath(obj, "nested.existing", "newValue");
    expect(obj).toEqual({ nested: { existing: "newValue" } });
  });

  it("handles numeric keys correctly", () => {
    const obj: Record<string, unknown> = {};
    setOnPath(obj, "42.key", "value");
    expect(obj).toEqual({ "42": { key: "value" } });
  });
});