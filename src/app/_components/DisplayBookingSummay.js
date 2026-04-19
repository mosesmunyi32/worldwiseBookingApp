import Link from "next/link";

export default async function DisplayBookingSummary({
  identifierStr,
  booking,
}) {
  const { id, startDate, endDate, numNights, totalPrice, observations, cabin } =
    booking;

  const image = cabin?.image;
  const name = cabin?.name;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(date));

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  return (
    <>
      <h2 className="text-2xl font-semibold text-accent-300 mb-10">
        {identifierStr}
      </h2>
      <div className="max-w-4xl mx-auto bg-primary-900 rounded-2xl shadow-lg overflow-hidden">
        {/* Image */}
        <div className="grid md:grid-cols-[1.2fr_2fr]">
          <div className="h-64 md:h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col justify-between">
            {/* Header */}
            <div className="space-y-2">
              <p className="text-xl items-center text-accent-500">
                {name} Enjoy your stay
              </p>
            </div>

            {/* Booking Details */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-6 text-sm">
              <div>
                <p className="text-primary-400">Start Date</p>
                <p className="font-medium text-primary-100">
                  {formatDate(startDate)}
                </p>
              </div>

              <div>
                <p className="text-primary-400">End Date</p>
                <p className="font-medium text-primary-100">
                  {formatDate(endDate)}
                </p>
              </div>

              <div>
                <p className="text-primary-400">Nights</p>
                <p className="font-medium text-primary-100">{numNights}</p>
              </div>

              <div>
                <p className="text-primary-400">Total Price</p>
                <p className="font-semibold text-lg text-primary-100">
                  {formatCurrency(totalPrice)}
                </p>
              </div>

              {observations && (
                <div className="col-span-2">
                  <p className="text-primary-400">Notes</p>
                  <p className="text-primary-100">{observations}</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-end">
              <Link
                href={`/account/reservations/edit/${id}`}
                className="btn btn-primary px-6"
              >
                Update booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
