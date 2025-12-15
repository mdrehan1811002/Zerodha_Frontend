const inputs = document.querySelectorAll(".otp-container input");
inputs.forEach((input, idx) => {
  input.addEventListener("input", () => {
    if (input.value && idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && idx > 0) {
      inputs[idx - 1].focus();
    }
  });
});

document.getElementById("otp-form").addEventListener("submit", (e) => {
  const otp = Array.from(inputs)
    .map((i) => i.value)
    .join("");
  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.name = "otp";
  hiddenInput.value = otp;
  e.target.appendChild(hiddenInput);
});
