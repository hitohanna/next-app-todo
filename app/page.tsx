import prisma from "@/db";
import Todoitems from "./components/Todoitems";

async function getTodos() {
  await prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await prisma.todo.findMany();
  //console.log(todos);

  return (
    <main className="max-w-6xl mx-auto">
      <div className="mt-8">
        <h3 className="text-center font-medium text-xl w-full mx-auto items-center">
          MY TODO LIST
        </h3>
        <ul className="mt-4 flex flex-col gap-2">
          {todos.map((todo) => (
            <Todoitems key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>
    </main>
  );
}
