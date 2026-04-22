import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ pkg: string[] }> },
) {
  const { pkg } = await params;
  const pkgName = pkg.join("/");

  if (!pkgName.startsWith("@jaak.ai/")) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  try {
    const res = await fetch(`https://registry.npmjs.org/${pkgName}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return NextResponse.json({ error: "not_found" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "upstream_error" }, { status: 502 });
  }
}
