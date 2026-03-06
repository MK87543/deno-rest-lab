import { assertEquals } from "jsr:@std/assert";
import { hello } from "../service.ts";

Deno.test("hello returns correct message", () => {
  const result = hello("World");

  assertEquals(result, "Hello ein test World");
});

Deno.test("check time", () => {
  const time = new Date();
  assertEquals(typeof time, "object");
});

Deno.test("echo test", async () => {
  const body = { message: "Hello, Deno!" };
  const response = await fetch("http://localhost:8079/echo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  assertEquals(result, body);
});
