import { Item, ItemContent, ItemMedia, ItemTitle } from "@/_components/ui/item";
import { Spinner } from "@/_components/ui/spinner";

export default function SpinData() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 bg-accent-800 ">
      <Item variant="muted">
        <ItemMedia>
          <Spinner className="size-8 text-primary-900 " />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1 text-primary-900">
            Loading Cabin data...
          </ItemTitle>
        </ItemContent>
      </Item>
    </div>
  );
}
