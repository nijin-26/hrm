import { ChangeEvent, FormEvent, useState } from "react";
import {
  CofirmationForm,
  ModalBtnsContainer,
} from "./DeleteConfirmation.style";
import Button from "../../common/Button/Button";

const DeleteConfirmation = ({
  employeeId,
  handleModalClose,
  handleEmployeeDelete,
}: {
  employeeId: string;
  handleModalClose: () => void;
  handleEmployeeDelete: (id: string) => void;
}) => {
  const [confirmationId, setConfirmationId] = useState("");
  const isValid = confirmationId !== employeeId;

  const handleConfirmationIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmationId(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleEmployeeDelete(confirmationId);
    setConfirmationId("");
  };

  return (
    <CofirmationForm data-employee-id={employeeId} onSubmit={handleSubmit}>
      <h2>Delete Employee</h2>
      <p>
        To confirm the deletion of this employee, please enter their ID, "
        {employeeId}" in the field below. Deletion cannot be undone.
      </p>

      <ModalBtnsContainer className="flex delete-employee-modal-btns">
        <input
          required
          type="text"
          placeholder="Enter the employee's ID to proceed."
          value={confirmationId}
          onChange={handleConfirmationIdChange}
        />
        <Button
          type="submit"
          btnType={isValid ? "disabled" : "primary"}
          disabled={isValid}
        >
          Delete
        </Button>
        <Button btnType="secondary" type="button" onClick={handleModalClose}>
          Cancel
        </Button>
      </ModalBtnsContainer>
    </CofirmationForm>
  );
};

export default DeleteConfirmation;
