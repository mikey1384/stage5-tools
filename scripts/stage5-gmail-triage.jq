def schema_error($message):
  error("stage5-gmail triage schema error: \($message)");

def has_nonempty_string($name):
  has($name) and (.[$name] | type == "string" and length > 0);

if type != "object" then
  schema_error("top-level response is not an object")
elif (.messages | type) != "array" then
  schema_error("messages is not an array")
elif has("resultSizeEstimate") and (.resultSizeEstimate | type) != "number" then
  schema_error("resultSizeEstimate is not numeric")
elif any(
  .messages[];
  (has_nonempty_string("id")
    and has_nonempty_string("date")
    and has_nonempty_string("from")
    and has_nonempty_string("subject"))
  | not
) then
  schema_error("a message is missing an id, date, sender, or subject")
else
  {
    apiStatus: "ok",
    schema: "stage5-gmail-triage-v1",
    supportedFields: ["id", "date", "from", "subject"],
    resultSizeEstimate: (.resultSizeEstimate // (.messages | length)),
    messages: [
      .messages[] | {
        id,
        date,
        from,
        subject
      }
    ]
  }
end
