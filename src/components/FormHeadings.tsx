import React from "react";

interface FormHeadingsProps {
  title: string;
  subTitle: string;
}
function FormHeadings({ title, subTitle }: FormHeadingsProps) {
  return (
    <div className="mb-4 mt-4">
      <h3 className="fw-bold text-center">{title}</h3>
      <p className="fw-light text-center text-black-50">{subTitle}</p>
    </div>
  );
}

export default FormHeadings;
