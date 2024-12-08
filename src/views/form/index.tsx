import Button from "@/components/Button";

export default function Form() {
  const formAction = (formData: FormData) => {
    console.log("[ formData ] >", formData.get("name"));
  };
  return (
    <>
      <div className="content_title">form组件使用</div>
      <form action={formAction}>
        <div className="mb-2">
          <label
            htmlFor="name"
            className="mr-2 w-[60px] inline-block text-right"
          >
            用户名:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="bg-c-yellow rounded-md px-2 py-1"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mr-2 w-[60px] inline-block text-right"
          >
            邮箱:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="bg-c-yellow rounded-md px-2 py-1"
          />
        </div>
        <div>
          <Button type="submit"> 提交 </Button>
        </div>
      </form>
    </>
  );
}
