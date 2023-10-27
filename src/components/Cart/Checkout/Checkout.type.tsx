import UserData from "../../../models/userData.model";

export interface CheckoutProps {
  onCancel: () => void;
  onConfirm: (userData: UserData) => void;
}
