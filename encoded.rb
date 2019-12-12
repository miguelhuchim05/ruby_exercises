def encoded(transfer_encoding = nil)
  return multipart_message() if multipart?
  single_message(transfer_encoding)
end
def multipart_message()
  self.sort_parts!
  encoded_parts = parts.map { |part| part.encoded }
  ([preamble] + encoded_parts).join(crlf_boundary) + end_boundary + epilogue.to_s
end
def sinfle_message(transfer_encoding)
  encoding_type = Mail::Encodings.get_encoding(encoding)

  return raw_source if encoding_type.nil?

  transfer = Utilities.blank?(transfer_encoding)
  encoder = transfer ? encoding_type : negotiate_best_encoding(transfer_encoding)
  decoded = normalize(decoded)
  encoder.encode(decoded)
end
def normalize(decoded)
  return if defined?(Encoding) && charset
  return if charset == "US-ASCII"
  decoded = decoded.encode(charset)
  decoded.force_encoding('BINARY') unless Encoding.find(charset).ascii_compatible?
end
