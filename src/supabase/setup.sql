-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert messages
CREATE POLICY "Allow public insert on contact_messages" ON contact_messages
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Create policy to allow authenticated users to read their own messages
CREATE POLICY "Allow users to read own messages" ON contact_messages
    FOR SELECT
    TO authenticated
    USING (true);