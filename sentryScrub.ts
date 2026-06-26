const SENSITIVE_KEY = /(token|secret|password|authorization|ssn|dob|documentcontent|filecontent|body|email|phone|address)/i;
function stripUrl(url?: string): string | undefined {
  if (typeof url !== "string") return url;
  const q = url.indexOf("?");
  return q === -1 ? url : url.slice(0, q);
}
function pruneObject(obj: Record<string, any>): Record<string, any> {
  for (const k of Object.keys(obj)) {
    if (SENSITIVE_KEY.test(k)) delete obj[k];
  }
  return obj;
}
export function scrubBreadcrumb(crumb: Record<string, any>): Record<string, any> {
  if (crumb.data) {
    if (crumb.data.url) crumb.data.url = stripUrl(crumb.data.url);
    crumb.data = pruneObject(crumb.data);
  }
  return crumb;
}
export function scrubEvent(event: Record<string, any>): Record<string, any> {
  if (event.user) event.user = { id: event.user.id };
  if (event.request?.url) event.request.url = stripUrl(event.request.url);
  if (event.request?.query_string) delete event.request.query_string;
  if (event.request?.cookies) delete event.request.cookies;
  if (event.request?.data) delete event.request.data;
  if (event.extra) event.extra = pruneObject(event.extra);
  if (event.contexts) {
    for (const ctx of Object.values(event.contexts)) {
      if (ctx && typeof ctx === "object") pruneObject(ctx as Record<string, any>);
    }
  }
  return event;
}
