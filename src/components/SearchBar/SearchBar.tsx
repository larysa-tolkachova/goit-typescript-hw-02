// import { ChangeEvent, JSX } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import css from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

type SearchBarQuery = {
  query: string;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (
    values: SearchBarQuery,
    actions: FormikHelpers<SearchBarQuery>
  ) => {
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.container}>
        <Field type="text" name="query" placeholder="Search images or photos" />
        <ErrorMessage
          name="query"
          component="span"
          className={css.error}
        ></ErrorMessage>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
