import Constants, { ExecutionEnvironment } from "expo-constants";
import { NativeToast as Toast } from "./NativeToast";
const isExpo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient, CustomToast = () => isExpo ? null : <Toast />;
export {
  CustomToast
};
//# sourceMappingURL=CustomToast.js.map
