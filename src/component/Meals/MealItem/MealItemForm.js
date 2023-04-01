import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          max: "1",
          min: "5",
          defaultValue: "1",
        }}
      />
      <button className={classes.button1}>+ Add </button>
    </form>
  );
};

export default MealItemForm;
