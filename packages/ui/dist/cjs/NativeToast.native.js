var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var NativeToast_exports = {};
__export(NativeToast_exports, {
  NativeToast: () => NativeToast
});
module.exports = __toCommonJS(NativeToast_exports);
var import_toast = require("@tamagui/toast"), import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const NativeToast = () => {
  const currentToast = (0, import_toast.useToastState)();
  return !currentToast || currentToast.isHandledNatively ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_toast.Toast,
    {
      duration: currentToast.duration,
      viewportName: currentToast.viewportName,
      enterStyle: { opacity: 0, scale: 0.5, y: -25 },
      exitStyle: { opacity: 0, scale: 1, y: -20 },
      y: 0,
      opacity: 1,
      scale: 1,
      animation: "quick",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.YStack, { py: "$1.5", px: "$2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toast.Toast.Title, { lh: "$1", children: currentToast.title }),
        !!currentToast.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toast.Toast.Description, { children: currentToast.message })
      ] })
    },
    currentToast.id
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NativeToast
});
//# sourceMappingURL=NativeToast.js.map
