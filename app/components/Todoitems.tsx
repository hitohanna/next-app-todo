"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  toggleTodo: (id: string, complete: boolean) => void;
};

function Todoitems({
  id,
  title,
  complete,
  createdAt,
  toggleTodo,
}: TodoItemProps) {
  function formatDate(date: Date) {
    const options: any = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const format = new Date(date).toLocaleDateString("id-ID", options);
    return format;
  }

  return (
    <>
      <li className="padding-btn border flex justify-between items-center">
        <div className="flex gap-2">
          <input
            id={id}
            type="checkbox"
            className="peer cursor-pointer"
            defaultChecked={complete}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <label
            id={id}
            className="peer-checked:line-through peer-checked:text-slate-700 cursor-pointer"
          >
            {title}
          </label>
        </div>
        <p className="text-xs italic text-slate-400">{formatDate(createdAt)}</p>
      </li>
    </>
  );
}

export default Todoitems;
