
export default function DisplayResponse({ response }) {
  if (!response || (!response.inputAi.length && !response.fileIp.length))
    return null;

  return (
    <div className="p-4 mt-4 h-100 overflow-auto border-t border-gray-200">
      <h2 className="text-lg font-semibold mb-3">API Response History</h2>


      {response.inputAi.length > 0 && (
        <div className="mb-3">
          <h3 className="font-medium text-blue-600 mb-1">Text Responses:</h3>
          {response.inputAi.map((res, i) => (
            <pre
              key={i}
              className="text-sm text-gray-800 bg-gray-50 p-2 rounded mb-2"
            >
              {JSON.stringify(res, null, 2)}
            </pre>
          ))}
        </div>
      )}


      {response.fileIp.length > 0 && (
        <div>
          <h3 className="font-medium text-green-600 mb-1">File Responses:</h3>
          {response.fileIp.map((res, i) => (
            <pre
              key={i}
              className="text-sm text-gray-800 bg-gray-50 p-2 rounded mb-2"
            >
              {JSON.stringify(res, null, 2)}
            </pre>
          ))}
        </div>
      )}
    </div>
  );
}

