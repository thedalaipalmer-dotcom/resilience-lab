# Security Specification: The Resilience Lab

## Data Invariants
1. A user can only read and write their own profile.
2. An episode progress document can only be created/read/updated by its owner.
3. Episode IDs in the progress collection must be valid and exist in our predefined list (though rules can't easily check a list, we can enforce ID patterns).
4. `streak` and `totalMicroWins` are strictly numbers.
5. Users cannot change their own `displayName` or `ageGroup` once set? Actually, we'll allow `ageGroup` updates but protect identity fields.

## The Dirty Dozen (Potential Attacks)
1. User A tries to read User B's profile.
2. User A tries to update User B's streak.
3. User A tries to create a progress document for Episode X under User B's UID.
4. User A tries to set their `totalMicroWins` to 999999 without doing any work.
5. User A tries to inject a 1MB string into their `status`.
6. User A tries to set a future timestamp for `updatedAt`.
7. User A tries to delete their profile (we may or may not allow this).
8. User A tries to impersonate an admin (though we don't have admins yet).
9. User A tries to change `updatedAt` to a past date.
10. User A tries to use a non-alphanumeric episode ID.
11. User A tries to set `ageGroup` to "invalid-group".
12. User A tries to write to a collection that doesn't exist.

## Global Safety Net
All collections except `users` are private and sub-collections of `users`.

## Primitive Definition
- `isSignedIn()`: request.auth != null
- `isOwner(userId)`: request.auth.uid == userId
- `isValidId(id)`: id.size() <= 128 && id.matches('^[a-zA-Z0-9_\\-]+$')
- `incoming()`: request.resource.data
- `existing()`: resource.data
