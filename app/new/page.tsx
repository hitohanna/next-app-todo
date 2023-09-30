import prisma from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

const page = () => {
  async function handleSubmit(data: FormData) {
    "use server";

    const title: any = data.get("title")?.valueOf();

    if (title.length === 0) {
      return;
    }
    await prisma.todo.create({ data: { title, complete: false } });
    redirect("/");
  }

  return (
    <div className="mt-8">
      <h3 className="text-center font-medium text-xl w-full mx-auto items-center">
        CREATE NEW TODO
      </h3>
      <form
        action={handleSubmit}
        className="flex flex-col gap-4 max-w-6xl mx-auto mt-8"
      >
        <input
          name="title"
          type="text"
          placeholder="Todo ..."
          className="placeholder:italic border p-2 bg-transparent"
        />
        <div className="flex gap-4 justify-end">
          <button
            type="submit"
            className="padding-btn text-sm bg-slate-800 border  text-slate-100"
          >
            Add Todo
          </button>
          <Link
            href=".."
            className="padding-btn text-sm border  text-slate-200"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
