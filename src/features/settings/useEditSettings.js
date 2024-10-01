import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

function useEditSettings() {
  let queryClient = useQueryClient();

  let { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("setting successfully Edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      //   reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateSetting };
}
export default useEditSettings;
