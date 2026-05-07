interface Props {
  categories: any[];
  onChange: (categoryId?: string) => void;
}

const Filters = ({ categories, onChange }: Props) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value || undefined)}
      className="ml-auto border border-black/10 rounded py-1.5 px-4 focus-visible:outline-0 focus-visible:shadow-none cursor-pointer max-w-sm truncate"
    >
      <option value="">All Categories</option>
      {categories?.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}

export default Filters;