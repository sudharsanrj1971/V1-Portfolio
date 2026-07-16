declare namespace Express { export interface Request { user?: string | import("jsonwebtoken").JwtPayload; } }
