import Button from "devextreme/ui/button";

export function globalInstanceSetting() {
    Button.defaultOptions({
        device: { deviceType: "desktop" },
        options: {
            type: 'default'
            // Here go the Button properties
        }
    });
}