import { useEffect, useState } from 'react';
import { memberService } from '../services/memberService';
import { Member } from '../types';

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      setLoading(true);
      const data = await memberService.getAllMembers();
      setMembers(data);
      setError(null);
    } catch (err) {
      setError('Failed to load members');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-xl">Loading members...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  const officers = members.filter((m) => m.role === 'officer' || m.role === 'admin');
  const regularMembers = members.filter((m) => m.role === 'member');

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>

      {/* Officers */}
      {officers.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Officers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Members */}
      {regularMembers.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {members.length === 0 && (
        <div className="card text-center py-12">
          <p className="text-gray-600 text-lg">No members yet.</p>
        </div>
      )}
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="card text-center">
      {member.imageUrl ? (
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
      ) : (
        <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-primary-100 flex items-center justify-center">
          <span className="text-3xl font-bold text-primary-600">
            {member.name.charAt(0)}
          </span>
        </div>
      )}
      <h3 className="text-lg font-bold mb-1">{member.name}</h3>
      {member.major && (
        <p className="text-sm text-gray-600 mb-2">{member.major}</p>
      )}
      {member.bio && (
        <p className="text-sm text-gray-700 mb-4">{member.bio}</p>
      )}
      <div className="flex justify-center gap-3">
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700"
          >
            LinkedIn
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
