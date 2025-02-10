"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const billSchema = z.array(
  z.object({
    description: z.string().min(3, "Por favor, informe uma descrição válido"),
    date: z.string().datetime("Por favor, informe uma data válido"),
  })
);

const schema = z.object({
  task: z.string().min(0, "Por favor informe uma task"),
  bills: billSchema,
});

type FormDataProps = z.infer<typeof schema>;

export default function CardWithForms() {
  const {
    handleSubmit,
    register,
    // control,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "all",
    resolver: zodResolver(schema),
    criteriaMode: "all",
    defaultValues: {
      task: "",
    },
  });

  const handleSubmitForm = (data: FormDataProps) => {
    console.log(data);
  };

  return (
    <>
      <form>
        <Card onSubmit={handleSubmit(handleSubmitForm)} className="flex-auto ">
          <CardHeader>
            <input
              {...register("task")}
              type="text"
              placeholder="Titulo"
              className="flex rounded-md"
            />
            {errors.task && (
              <p className="text-red-600">{errors.task.message}</p>
            )}
          </CardHeader>
          <CardContent>
            <input
              {...register("task")}
              type="text"
              placeholder="Descrição"
              className="flex rounded-md"
            />
            {errors.task && (
              <p className="text-red-600">{errors.task.message}</p>
            )}
          </CardContent>
          <CardContent>
            <input
              {...register("task")}
              type="text"
              placeholder="Atividades"
              className="flex rounded-md"
            />
            {errors.task && (
              <p className="text-red-600">{errors.task.message}</p>
            )}
          </CardContent>
        </Card>
      </form>
    </>
  );
}

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useFieldArray, useForm } from "react-hook-form";
// import { z } from "zod";
// import { getByPlaceholderText } from "@testing-library/dom";

// const billSchema = z.array(
//   z.object({
//     description: z.string().min(3, "Por favor, informe uma descrição válido"),
//     date: z.string().datetime("Por favor, informe uma data válido"),
//   })
// );

// const schema = z.object({
//   task: z.string().min(3, "Por favor informe uma task"),
//   bills: billSchema,
// });

// type FormDataProps = z.infer<typeof schema>;

// export default function Task() {
//   const {
//     handleSubmit,
//     register,
//     // control,
//     formState: { errors },
//   } = useForm<FormDataProps>({
//     mode: "all",
//     resolver: zodResolver(schema),
//     criteriaMode: "all",
//     defaultValues: {
//       task: "",
//     },
//   });

//   // const { fields, append, remove } = useFieldArray({
//   //   name: "bills",
//   //   // control:
//   // });

//   const handleSubmitForm = (data: FormDataProps) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//         <main className="flex flex-row gap-8">
//           <form onSubmit={handleSubmit(handleSubmitForm)}>
//             <input
//               {...register("task")}
//               type="text"
//               placeholder="nome da task"
//             />
//             {errors.task && <p>{errors.task.message}</p>}

//             <button type="submit">Criar</button>
//           </form>
//         </main>
//       </div>
//       {/* <Dialog>
//         <DialogTrigger>Open</DialogTrigger>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Are you absolutely sure?</DialogTitle>
//             <DialogDescription>
//               This action cannot be undone. This will permanently delete your
//               account and remove your data from our servers.
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog> */}
//     </>
//   );
// }
