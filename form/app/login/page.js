"use client";

// import { updateUser } from "../api/login/route";

// export default function LoginPage() {
//   const userId = "123";
//   const updateWithUserId = updateUser.bind(null, userId);

//   return (
//     <form action={updateWithUserId} className="space-y-2">
//       <input name="name" type="text" placeholder="Name" />
//       <input name="email" type="email" placeholder="Email" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// // 2nd Way with useActionState()
import { updateUserAction } from "../api/login/route";
import { useActionState } from "react";

const initialSateSchema = {
  success: false,
  errors: {},
};

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    updateUserAction, // ✅ function
    initialSateSchema, // ✅ initial state
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formAction(formData); // ✅ manually call
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" type="text" placeholder="Name" />
      {state.errors?.name && (
        <p className="text-red-500">{state.errors.name[0]}</p>
      )}
      <input name="email" type="email" placeholder="Email" />
      {state.errors?.email && (
        <p className="text-red-500">{state.errors.email[0]}</p>
      )}
      <button disabled={isPending} type="submit">
        {isPending ? "loading..." : "Submit"}
      </button>
      {state.success && <p className="text-green-600">Updated!</p>}
    </form>
  );
}
